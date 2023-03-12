import sanityClient from '@sanity/client'
import {createClient} from "next-sanity";

export default createClient({
	projectId: '64i5rezh', // you can find this in sanity.json
	dataset: 'production', // or the name you chose in step 1
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-02'
})