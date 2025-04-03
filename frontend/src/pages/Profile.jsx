import React from "react";
import { useAuth } from "../contexts/auth-context-helper";

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <div className="text-6xl font-bold text-slate-600">Profil</div>
      <div className="block p-10 bg-white border border-gray-200 shadow-xl rounded-lg shadowdark:border-gray-700">
        <h5 className="my-2 text-2xl font-bold tracking-tight">
          Nume: {user.name}
        </h5>
        <p className="font-normal text-gray-700">Email: {user.email}</p>
        <p className="font-normal text-gray-700">
          Data inregistrarii: {user.created_at}
        </p>
      </div>
    </>
  );
}
