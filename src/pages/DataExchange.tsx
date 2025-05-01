
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ArrowLeft, Lock, Shield } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

type SectorType = 'construction' | 'technology' | 'healthcare' | 'retail' | 'logistics';

const DataExchange = () => {
  const { role } = useParams<{role: string}>();
  const { toast } = useToast();
  const [sector, setSector] = useState<SectorType>('technology');
  const [dataView, setDataView] = useState<'table' | 'trends'>('table');
  const [isDecrypting, setIsDecrypting] = useState(true);

  useEffect(() => {
    // Simulate decryption process
    const timer = setTimeout(() => {
      setIsDecrypting(false);
      toast({
        title: "Data decrypted securely",
        description: "Using quantum-resistant Kyber encryption for end-to-end security.",
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [sector, toast]);

  const getRoleSpecificTitle = () => {
    switch (role) {
      case 'government': return 'Government Economic Dashboard';
      case 'enterprise': return 'Enterprise Market Intelligence';
      case 'sme': return 'Small Business Insights';
      default: return 'DataSouk Dashboard';
    }
  };

  const getSectorData = (sectorName: SectorType) => {
    // Simulated sector-specific data that would be encrypted in a real implementation
    const baseData = {
      construction: [
        { metric: 'Avg. Cement Price', value: 'AED 260/ton', trend: '+3.5%', source: 'Aggregated suppliers (15)' },
        { metric: 'Labor Availability', value: '72%', trend: '-5%', source: 'Ministry of Labor' },
        { metric: 'Steel Imports', value: '120,000 tons', trend: '+12%', source: 'UAE Ports Authority' },
      ],
      technology: [
        { metric: 'IT Infrastructure Spending', value: 'AED 2.1B', trend: '+18%', source: 'Tech companies (32)' },
        { metric: 'Cloud Services Cost', value: 'AED 150/user', trend: '-8%', source: 'Service providers (7)' },
        { metric: 'Software Engineer Salary', value: 'AED 18,000/mo', trend: '+5%', source: 'HR aggregated data' },
      ],
      healthcare: [
        { metric: 'Medical Supplies', value: 'AED 3.5B', trend: '+4%', source: 'Healthcare entities (22)' },
        { metric: 'Pharmaceutical Imports', value: 'AED 1.2B', trend: '+9%', source: 'Customs data' },
        { metric: 'Average Patient Cost', value: 'AED 1,200', trend: '+2.5%', source: 'Insurance providers (12)' },
      ],
      retail: [
        { metric: 'Consumer Spending', value: 'AED 42B', trend: '+3.2%', source: 'Financial institutions (8)' },
        { metric: 'Foot Traffic', value: '15M visits', trend: '-1%', source: 'Mall operators (5)' },
        { metric: 'Online Sales', value: 'AED 8.5B', trend: '+22%', source: 'E-commerce platforms (18)' },
      ],
      logistics: [
        { metric: 'Container Volume', value: '2.3M TEUs', trend: '+5%', source: 'Port operators (3)' },
        { metric: 'Last-mile Delivery Cost', value: 'AED 12/package', trend: '-3%', source: 'Logistics companies (14)' },
        { metric: 'Warehouse Occupancy', value: '83%', trend: '+7%', source: 'Real estate data' },
      ],
    };

    // Customize data based on user role
    if (role === 'government') {
      // Government gets more comprehensive data
      return baseData[sectorName].concat([
        { metric: 'Total Market Size', value: 'AED 78B', trend: '+4.3%', source: 'Economic analysis' },
        { metric: 'Tax Revenue', value: 'AED 8.2B', trend: '+6.1%', source: 'Ministry of Finance' },
      ]);
    } else if (role === 'enterprise') {
      // Enterprises get competitor analysis
      return baseData[sectorName].concat([
        { metric: 'Market Share Analysis', value: 'Top 5 hold 62%', trend: '-2%', source: 'Market research' },
      ]);
    }

    return baseData[sectorName];
  };

  return (
    <div className="container py-16">
      <div className="flex items-center mb-8">
        <Button variant="outline" size="sm" asChild className="mr-4">
          <Link to="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Link>
        </Button>
        <h1 className="text-3xl font-bold gradient-text">{getRoleSpecificTitle()}</h1>
      </div>
      
      <div className="bg-muted/40 p-4 rounded-lg flex items-center mb-8">
        <Shield className="h-5 w-5 mr-2 text-datasouk-blue" />
        <p className="text-sm">All data is encrypted end-to-end using Kyber quantum-resistant algorithms on Diamante blockchain.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Select Industry Sector</CardTitle>
            <CardDescription>Choose the data sector to explore</CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              value={sector}
              onValueChange={(value: SectorType) => {
                setSector(value);
                setIsDecrypting(true);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="logistics">Logistics</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        
        <div className="md:col-span-3">
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg">{sector.charAt(0).toUpperCase() + sector.slice(1)} Sector Insights</CardTitle>
                <CardDescription>Updated hourly through secure blockchain verification</CardDescription>
              </div>
              <ToggleGroup type="single" value={dataView} onValueChange={(value) => value && setDataView(value as 'table' | 'trends')}>
                <ToggleGroupItem value="table" variant="outline" size="sm">Data</ToggleGroupItem>
                <ToggleGroupItem value="trends" variant="outline" size="sm">Trends</ToggleGroupItem>
              </ToggleGroup>
            </CardHeader>
            <CardContent>
              {isDecrypting ? (
                <div className="flex flex-col items-center justify-center h-48 space-y-4">
                  <div className="animate-pulse flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-datasouk-blue" />
                    <span>Decrypting secure data...</span>
                  </div>
                  <div className="w-48 h-1 bg-gray-200 rounded overflow-hidden">
                    <div className="bg-datasouk-teal h-1 animate-[slide_1s_ease-in-out_infinite]" style={{ width: '70%' }}></div>
                  </div>
                </div>
              ) : dataView === 'table' ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Metric</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Trend</TableHead>
                      <TableHead>Source</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getSectorData(sector).map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.metric}</TableCell>
                        <TableCell>{item.value}</TableCell>
                        <TableCell className={`${item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{item.trend}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{item.source}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="h-48 flex items-center justify-center">
                  <p className="text-muted-foreground">Trend visualization would appear here in a complete implementation</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Data Security</CardTitle>
            <CardDescription>Your data protection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="h-5 w-5" />
              <span>End-to-end encrypted</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Protected by Kyber post-quantum cryptography and stored on Diamante blockchain with zero knowledge proofs.
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Data Contribution</CardTitle>
            <CardDescription>How you help the ecosystem</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your organization securely contributes anonymized economic signals without exposing sensitive information.
            </p>
            <Button variant="outline" className="mt-4 w-full text-xs" size="sm">
              Manage Data Sharing Settings
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Blockchain Verification</CardTitle>
            <CardDescription>Transparent & tamper-proof</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-xs font-mono bg-muted p-2 rounded">
              <div className="truncate">Block: #384721</div>
              <div className="truncate">Hash: 0x8f71e42b9df7b4dd98974a1aa{'\n'}208cb7f3547a1</div>
              <div className="truncate">Verified: {new Date().toLocaleString()}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataExchange;
