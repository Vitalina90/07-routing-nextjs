"use client";
import { useState } from "react";
import css from "./TagsMenu.module.css";
import Link from "next/link";
import { MENU_TAG_OPTIONS } from "@/lib/constants";

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggleMenu} className={css.menuButton}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          {MENU_TAG_OPTIONS.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link
                onClick={toggleMenu}
                href={`/notes/filter/${tag}`}
                className={css.menuLink}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


