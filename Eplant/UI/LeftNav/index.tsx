import { useSpecies } from '@eplant/contexts/species'
import Species from '@eplant/Species'
import { Divider, FormControl, InputLabel, styled } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import * as React from 'react'
import { SearchGroup } from './GeneSearch'
import { LogoWithText } from '../Logo'
import { useGeneticElements } from '@eplant/contexts/geneticElements'
import GeneticElementComponent from '../GeneticElementComponent'
import { Collections } from './Collections'

export function LeftNav(props: {}) {
  const [species, setSpecies] = useSpecies()
  const [geneticElements, setGeneticElements] = useGeneticElements()
  return (
    <Stack gap={4} direction="column">
      <LogoWithText text="ePlant" />
      <SearchGroup
        addGeneticElements={(s) => {
          setGeneticElements(
            geneticElements.concat(
              s.filter((g) => !geneticElements.find((gene) => g.id == gene.id))
            )
          )
        }}
      />
      <Divider light />
      <Collections />
    </Stack>
  )
}
