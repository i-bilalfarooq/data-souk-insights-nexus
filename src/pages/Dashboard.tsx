
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Shield, Database, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

type UserRole = 'government' | 'enterprise' | 'sme';

const roles = [
  {
    id: 'government',
    name: 'Government Entity',
    description: 'Access comprehensive economic data and regulatory insights',
    icon: Shield,
    color: 'bg-datasouk-blue',
  },
  {
    id: 'enterprise',
    name: 'Large Enterprise',
    description: 'Share and access industry-specific data for strategic planning',
    icon: Database,
    color: 'bg-datasouk-teal',
  },
  {
    id: 'sme',
    name: 'SME / Small Business',
    description: 'Get market pricing trends and competitive intelligence',
    icon: Users,
    color: 'bg-datasouk-navy',
  },
];

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<{ role: UserRole }>({
    defaultValues: {
      role: 'enterprise',
    },
  });

  const onSubmit = (data: { role: UserRole }) => {
    setLoading(true);
    // Simulate blockchain encryption process
    setTimeout(() => {
      toast({
        title: "Secure connection established",
        description: `Your ${getSelectedRole(data.role)?.name} account is now connected with quantum-secure encryption.`,
      });
      setLoading(false);
      navigate(`/data-exchange/${data.role}`);
    }, 1500);
  };

  const getSelectedRole = (selectedRole: UserRole) => {
    return roles.find(role => role.id === selectedRole);
  };

  return (
    <div className="container max-w-5xl py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
        Select Your Role in DataSouk
      </h1>
      <p className="text-lg mb-8 text-muted-foreground">
        Choose your organization type to access relevant, secure blockchain-encrypted data with Kyber quantum-security.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    {roles.map((role) => (
                      <FormItem key={role.id}>
                        <FormControl>
                          <Card className={`relative border-2 cursor-pointer transition-all duration-200 ${field.value === role.id ? 'border-datasouk-teal shadow-lg' : 'border-transparent hover:border-datasouk-teal/30'}`}>
                            <CardHeader className="pb-2">
                              <div className={`${role.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-2`}>
                                <role.icon className="h-6 w-6" />
                              </div>
                              <CardTitle>{role.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="text-sm">{role.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="pt-0">
                              <RadioGroupItem 
                                value={role.id} 
                                id={role.id} 
                                className="absolute top-4 right-4"
                              />
                            </CardFooter>
                          </Card>
                        </FormControl>
                        <FormLabel className="sr-only" htmlFor={role.id}>{role.name}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="bg-datasouk-teal hover:bg-datasouk-blue text-white w-full md:w-auto" 
            size="lg"
            disabled={loading}
          >
            {loading ? 'Establishing Secure Connection...' : 'Access Secure Data'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Dashboard;
