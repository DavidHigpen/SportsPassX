"use client";

import { signIn, signOut } from "next-auth/react";
// import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

interface NavBarProps {
  pageName?: string,
  textColor?: string,
}

export default function NavBar({pageName, textColor}: NavBarProps) {
  const { data: session, status, update } = useSession();
  const isSignedIn = status === "authenticated";
  const router = useRouter();

  React.useEffect(() => {
    if (isSignedIn && session?.user?.classification === null) {
      router.push("/newAccount");
    }
  }, [isSignedIn, session, router]);

  return (
    <>
      <div className={`navbar h-24 bg-transparent fixed top-0 z-50 font-bold ${ textColor ? `text-[var(${textColor})]` : "text-[var(--dynamic-text)]" }`} >

        {/* Left Header */}
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost text-3xl">
            SportsPassX
          </a>
        </div>

        {/* Center Header */}
        <div className="flex-1 navbar-center">
          <h1 className="text-3xl font-bold">
            {pageName || ""}
          </h1>
        </div>


        {/* Right Header */}
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 text-lg z-50">
            <li>
              <a href="listings">View Listings</a>
            </li>
            <li>
              <a href="createListing">Create Listing</a>
            </li>
            <li>
              <a
                onClick={() => {
                  update();
                  console.log(session);
                  console.log(session?.user.classification)
                }}
              >
                Debug
              </a>
            </li>
            {!isSignedIn && status !== "loading" && (
              <li>
                <a onClick={() => signIn("google")}>Log In</a>
              </li>
            )}
          </ul>
          {(isSignedIn || status === "loading") && (
            <div className="dropdown dropdown-end gap-4">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img
                    src={
                      status !== "loading" && session?.user?.image
                        ? `/api/image-proxy?url=${encodeURIComponent(session.user.image)}`
                        : "/DefaultProfile.jpg"
                    }
                    alt="Profile"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-[var(--background)] rounded-box w-52 p-2 shadow border-2 border-base-300 z-50"
              >
                <li>
                  <p onClick={() => router.push("/account")}>
                    {session?.user?.name}
                  </p>
                </li>
                <li>
                  <a onClick={() => router.push("/faq")}>Help & FAQ</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => signOut()}>Log Out</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="h-24"></div>
      {/* <div className="border-t border-3 border-base-300"></div> */}
    </>
  );
}
