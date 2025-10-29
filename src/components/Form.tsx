import { Button } from "./Button";

export function Form() {
  return (
    <div className="mb-[300px] text-center py-10 px-6 bg-Navy-850 rounded-[9px] w-[336px] md:w-[480px] mx-auto absolute top-[-200px] inset-x-0 xl:w-[720px]">
        <h2 className="font-bold mb-4 text-[1.25rem]">Get early access today</h2>
        <p className="text-sm mb-8">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <form className="flex flex-col gap-6 xl:flex-row">
            <input 
                type="email" 
                className="bg-white rounded-3xl placeholder:text-gray-400 text-center h-12 xl:flex-1 text-Navy-900" 
                placeholder="email@example.com"
            />
            <Button styles="xl:w-[200px]" text="Submit"/>
        </form>
    </div>
  )
}
