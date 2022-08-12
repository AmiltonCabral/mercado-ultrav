import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

type searchContextType = {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>
}

const searchContextDefaultValues: searchContextType = {
  search: "",
  setSearch: () => {}
}

export const SearchContext = createContext<searchContextType>(searchContextDefaultValues)

type Props = {
  children: ReactNode
}

export const SearchProvider = ({ children }: Props) => {

  const [search, setSearch] = useState<string>("")

  return (
    <SearchContext.Provider value={ {search, setSearch} }>
      {children}
    </SearchContext.Provider>
  )
}