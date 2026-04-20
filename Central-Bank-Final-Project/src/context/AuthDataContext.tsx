import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface AuthDataContextType {
    vpqList: any[];
    setVpaList: (list: any[]) => void;
    merchantData: any;
    setMerchantData: (data: any) => void;
    isLoadingData: boolean;
    setIsLoadingData: (v: boolean) => void;
    selectedVpa: any;
    setSelectedVpa: (v: any) => void;
}

const AuthDataContext = createContext<AuthDataContextType>({
    vpqList: [],
    setVpaList: () => {},
    merchantData: null,
    setMerchantData: () => {},
    isLoadingData: false,
    setIsLoadingData: () => {},
    selectedVpa: null,
    setSelectedVpa: () => {},
});

export const useAuthData = () => useContext(AuthDataContext);

export const AuthDataProvider = ({ children }: { children: ReactNode }) => {
    const [vpqList, setVpaList] = useState<any[]>([]);
    const [merchantData, setMerchantData] = useState<any>(null);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [selectedVpa, setSelectedVpa] = useState<any>(null);

    return (
        <AuthDataContext.Provider value={{ vpqList, setVpaList, merchantData, setMerchantData, isLoadingData, setIsLoadingData, selectedVpa, setSelectedVpa }}>
            {children}
        </AuthDataContext.Provider>
    );
};
