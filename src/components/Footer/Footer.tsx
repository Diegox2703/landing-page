import { ContactItem } from "./ContactItem";
import { FooterListItem } from "./FooterListItem";
import { conditions, contactInformation, medias, pages } from '../../common/constants.tsx'

export function Footer() {
  return (
    <footer className="pt-[260px] pb-40 px-6">
        <img className="mb-10" src="/images/logo.svg" alt="logo"/>   
        <div className="xl:flex xl:gap-24">
          <div className="flex flex-col gap-4 md:flex-row xl:gap-24">
            <ContactItem
              styles="flex-1"
              {...contactInformation[0]}
            />
            <div className="flex flex-col gap-4 flex-1 xl:flex-none">
              {
                contactInformation.slice(1).map(contact => (
                  <ContactItem
                    key={ contact.alt }
                    {...contact}
                  />
                ))
              }
            </div>      
          </div>
          <div className="flex flex-col gap-8 mt-16 md:flex-row md:gap-24 xl:mt-0">
            <ul>
              {
                pages.map(page => (
                  <FooterListItem key={ page } text={ page }/>
                )) 
              }
            </ul>        
            <ul>
              {
                conditions.map(condition => (
                  <FooterListItem key={ condition } text={ condition }/>
                ))
              }
            </ul>   
            <div className="flex justify-center gap-4">
              {
                medias.map(media => (
                  <div 
                    className="text-white hover:text-Teal-200 cursor-pointer border rounded-full size-[30px] p-0.5"
                    key={ media.text }
                  >
                    { media.icon }
                  </div>
                ))
              }
            </div>     
          </div>
        </div>
    </footer>
  )
}
