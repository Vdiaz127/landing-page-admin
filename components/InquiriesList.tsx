"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale"; // Importa el locale para español
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Inquiry {
  _id: string;
  email: string;
  message: string;
  source: string;
  createdAt: string;
}

export default function InquiriesList() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchEmail, setSearchEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchInquiries = async (email?: string): Promise<void> => {
    try {
      setLoading(true);
      const url = `/api/inquiries${email ? `?email=${encodeURIComponent(email)}` : ""}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("No se pudieron cargar las consultas");
      }

      const data: Inquiry[] = await response.json();
      setInquiries(data);
      setError("");
    } catch (err) {
      setError("No se pudieron cargar las consultas. Por favor, inténtalo más tarde.");
      console.error("Error al cargar las consultas:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchEmail(value);
    fetchInquiries(value);
  };

  if (error) {
    return (
      <div className="text-center text-red-600 p-4 bg-red-50 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="email"
          placeholder="Buscar por correo..."
          value={searchEmail}
          onChange={handleSearch}
          className="pl-10"
        />
      </div>

      {loading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      ) : inquiries.length === 0 ? (
        <div className="text-center text-gray-500">
          No se encontraron consultas.
        </div>
      ) : (
        <div className="grid gap-4">
          {inquiries.map((inquiry) => (
            <Card key={inquiry._id} className="p-6">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-900">{inquiry.email}</h3>
                  <span className="text-sm text-gray-500">
                    {format(new Date(inquiry.createdAt), "PPp", { locale: es })}
                  </span>
                </div>
                <p className="text-gray-700">{inquiry.message}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">
                    Fuente: {inquiry.source}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
