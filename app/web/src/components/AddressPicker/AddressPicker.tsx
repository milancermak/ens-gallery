import Header from 'src/components/Header/Header'
import { useForm, SubmitHandler } from 'react-hook-form'

type AddressPickerProps = {
  setEns: any
}

type Inputs = {
  domainOrAddress: string
}

const AddressPicker = ({ setEns }: AddressPickerProps) => {
  // TODO: deal with error states
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = ({ domainOrAddress }) => {
    if (domainOrAddress.includes('.')) {
      // it's a domain
      setEns({ domain: domainOrAddress, address: null })
    } else {
      setEns({ domain: null, address: domainOrAddress })
    }
  }

  return (
    <>
      <Header title="ENS Gallery" />
      <div className="container mx-auto flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm ">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              {...register('domainOrAddress', { required: true })}
              className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter ENS domain or address"
            />
            <button
              className="flex-shrink-0 border-blue-500 hover:border-blue-600 bg-blue-500 hover:bg-blue-600 font-bold text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Load gallery
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddressPicker
