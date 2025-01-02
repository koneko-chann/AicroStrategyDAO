import { AssetsTable } from '@/components/stats/assets-table'
import CoinData from '@/components/stats/coin-data'
import CoinDetailSection from '@/components/stats/coin-detail-section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function StatsPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4">
      <div className="flex gap-6">
        <CoinDetailSection />

        <CoinData />
      </div>

      <div>
        <Tabs defaultValue="trades" className="w-full">
          <TabsList>
            <TabsTrigger value="trades" className="font-me text-base">
              Trades
            </TabsTrigger>
            <TabsTrigger value="assets" className="font-me text-base">
              Assets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trades">
            <iframe
              src="https://dexscreener.com/base/0x20ef84969f6d81Ff74AE4591c331858b20AD82CD?embed=1&info=0"
              className="h-[36rem] w-full"
              title="Stats iframe"
              allowFullScreen
            ></iframe>
          </TabsContent>

          <TabsContent value="assets">
            <AssetsTable />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
