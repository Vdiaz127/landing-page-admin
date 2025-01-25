import InquiriesList from '@/components/InquiriesList';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Consultas Realizadas
        </h1>
        <InquiriesList />
      </div>
    </main>
  );
}