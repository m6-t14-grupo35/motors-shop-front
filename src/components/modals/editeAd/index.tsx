import Input from '@/components/input';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { IaddAd } from '@/interfaces/forms.interfaces';
import { useState } from "react";
import React, { forwardRef, Ref } from "react";
import { MdClose } from "react-icons/md"
import { IaddImageInputProps, IediteAdProps } from '@/interfaces/componentProps.interface';
import { Button_24, Button_3, Button_7 } from '@/components/buttons';

const maxYear = new Date().getFullYear() + 1

const schema = z.object({
  brand: z.string().nonempty('insira a marca').optional(),
  model: z.string().nonempty('insira o modelo').optional(),
  year: z.coerce.number().min(1800, 'ano invalido').max(maxYear, 'ano invalido').optional(),
  fuel: z.string().min(0,'insira um valor positivo').optional(),
  milage: z.coerce.number().min(0,'insira um valor positivo').optional(),
  collor: z.string().nonempty('insira a marca').optional(),
  priceFIPE: z.coerce.number().min(0,'insira um valor positivo').optional(),
  selePrice: z.coerce.number().min(0,'insira um valor positivo').optional(),
  description: z.string().nonempty('insira uma descrição').optional(),
  image_1:z.string().url('url invalida').nonempty('imagem obrigatoria').optional(),
  image_2:z.string().optional(),
  image_3:z.string().optional(),
  image_4:z.string().url('url invalida').optional(),
  image_5:z.string().url('url invalida').optional(),
  image_6:z.string().url('url invalida').optional()
})

export const ModalEditeAd = ({closeFunction, ad}: IediteAdProps) => {
  const [imageCount, setImageCount] = useState(2);

  const addImageField = () => {
    if (imageCount < 5) {
      setImageCount(imageCount + 1);
    }
  };

  const registerFunction = async (data:IaddAd) => {
    // const response = await api.patch("ads/", data, {
    //   headers:{
    //     Authorization:`Bearer ${token}`
    //   }
    // })
    // if(response.status == 200){
    //
    // }
  }

  const {register, handleSubmit, formState: {errors}} = useForm<IaddAd>({
    resolver: zodResolver(schema),
    shouldUnregister: false
  });
  // const onSubmit: SubmitHandler<IaddAd> = data => registerFunction(data);
  const onSubmit: SubmitHandler<IaddAd> = data => {console.log(data)};


  return(
    <div className='fixed inset-0 flex justify-center items-center w-screen bg-bg-50 z-50'>
      <div className='w-full max-w-[520px] bg-white rounded py-[20px] px-[30px] overflow-y-auto max-h-[96%] custom-scrollbar'>
        <div>
          <div className='w-full flex justify-between '>
            <h2 className='text-[1rem] font-bold leading-[1.25rem] mb-[15px]'>Criar anúncio </h2>
            <button onClick={() => closeFunction()}>
              <MdClose className='text-grey-3 text-[20px] font-extrabold'/>
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[24px]'>

            <Input
              id="Brand"
              type="text"
              label="Marca"
              placeholder='Mercedes Benz'
              required={true}
              error={errors.brand?.message}
              value={ad.brand && ad.brand}
              {...register('brand')}
            />

            <Input
              id="model"
              type="text"
              label="Modelo"
              placeholder='A 200 CGI ADVANCE'
              required={true}
              error={errors.model?.message}
              value={ad.model && ad.model}
              {...register('model')}
            />

            <div className='flex gap-[21px] w-full'>
              <Input
                id="year"
                type="number"
                label="Ano"
                placeholder='2018'
                required={true}
                error={errors.year?.message}
                // @ts-ignore
                value={ad.year && ad.year}
                {...register('year')}
              />

              <div className='w-full'>
              <label
                className="whitespace-nowrap block text-sm font-medium leading-6 text-gray-900"
              >
                Combustivel
              </label>

                <select
                  id="fuel"
                  required={true}
                  {...register('fuel')}
                  className='pl-[14px] block w-full rounded-md border-0 py-[8px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-[1.5px] outline-brand-2'
                >
                  <option value={1}>Gasolina</option>
                  <option value={2}>Álcool</option>
                  <option value={3}>Outros</option>
                </select>
              </div>

            </div>

            <div className='flex gap-[21px] w-full'>
              <Input
                id="milage"
                type="number"
                label="Quilometragem"
                placeholder='30.000'
                required={true}
                error={errors.milage?.message}
                // @ts-ignore
                value={ad.milage && ad.milage}
                {...register('milage')}
              />

              <Input
                id="collor"
                type="text"
                label="Cor"
                placeholder='Branco'
                required={true}
                error={errors.collor?.message}
                value={ad.collor && ad.collor}
                {...register('collor')}
              />
            </div>

            <div className='flex gap-[21px] w-full'>
              <Input
                  id="priceFIPE"
                  type="number"
                  label="Preço tabela FIPE"
                  placeholder='RS 48.000,00'
                  required={true}
                  error={errors.priceFIPE?.message}
                  // @ts-ignore
                  value={ad.priceFIPE && ad.priceFIPE}
                  {...register('priceFIPE')}
              />

              <Input
                id="selePrice"
                type="number"
                label="Preço"
                placeholder='R$ 50.000,00'
                required={true}
                error={errors.selePrice?.message}
                // @ts-ignore
                value={ad.selePrice && ad.selePrice}
                {...register('selePrice')}
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="whitespace-nowrap block text-sm font-medium leading-6 text-gray-900"
              >
                Descrição
                {errors.description?.message && '*'}
              </label>

              <textarea
                id="description"
                autoComplete='description'
                required={true}
                className="resize-none px-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-[1.5px] outline-brand-2"
                {...register('description')}
                value={ad.description && ad.description}
              />

              {errors.description?.message && <p className="text-sm/5 text-red-700 absolute">errors.descripitions.message </p>}
            </div>

            <Input
              id="coverImage"
              type="text"
              label="Imagem de capa"
              placeholder='https://image.com'
              required={true}
              error={errors.image_1?.message}
              {...register('image_1')}
            />

            {Array.from({ length: imageCount }, (_, index) => (
              <Input
                key={`image_${index + 2}`}
                id={`image_${index + 2}`}
                type="text"
                label={`${index + 2}° Imagem da galeria`}
                placeholder="https://image.com"
                required={false}
                // @ts-ignore
                {...register(`image_${index + 2}`)}
              />
            ))}

            <Button_7 type="button" text="Adicionar campo para imagem da galeria" onClick={addImageField}/>

            <div className='flex flex-wrap gap-[10px] justify-between sw370:justify-end w-full mt-[30px]'>
              <Button_3 type="button" text="Cancelar" height={2}/>
              <Button_24 type="submit" text="Criar anúncio" height={2}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
