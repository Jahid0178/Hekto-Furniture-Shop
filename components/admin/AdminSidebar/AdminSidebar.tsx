import { adminSidebarLinks } from "@/data/data";
import Link from "next/link";
import React from "react";

const AdminSidebar = () => {
  return (
    <aside className="py-8 px-3">
      <ul>
        {adminSidebarLinks.map((item) => (
          <li key={item.id} className="p-2 border mb-2 last:mb-0">
            <Link href={item.href} className="w-full block">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
