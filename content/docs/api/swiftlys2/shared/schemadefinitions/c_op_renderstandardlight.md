---
title: C_OP_RenderStandardLight
---

```csharp
public interface C_OP_RenderStandardLight : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderStandardLight>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AttenuationStyle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L32)

```csharp
ref StandardLightingAttenuationStyle_t AttenuationStyle { get; }
```

#### Property Value

- [StandardLightingAttenuationStyle_t](/docs/api/shared/schemadefinitions/standardlightingattenuationstyle_t)

**CapsuleLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L54)

```csharp
ref float CapsuleLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**CapsuleLightBehavior** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L52)

```csharp
ref ParticleLightBehaviorChoiceList_t CapsuleLightBehavior { get; }
```

#### Property Value

- [ParticleLightBehaviorChoiceList_t](/docs/api/shared/schemadefinitions/particlelightbehaviorchoicelist_t)

**CastShadows** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L24)

```csharp
ref bool CastShadows { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ClosedLoop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L58)

```csharp
ref bool ClosedLoop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ColorBlendType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L20)

```csharp
ref ParticleColorBlendType_t ColorBlendType { get; }
```

#### Property Value

- [ParticleColorBlendType_t](/docs/api/shared/schemadefinitions/particlecolorblendtype_t)

**ColorScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L18)

```csharp
CParticleCollectionVecInput ColorScale { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

**ConstrainRadiusToLengthRatio** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L68)

```csharp
ref float ConstrainRadiusToLengthRatio { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**FalloffLinearity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L34)

```csharp
CParticleCollectionFloatInput FalloffLinearity { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**FiftyPercentFalloff** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L36)

```csharp
CParticleCollectionFloatInput FiftyPercentFalloff { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**FogContribution** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L50)

```csharp
CParticleCollectionRendererFloatInput FogContribution { get; }
```

#### Property Value

- [CParticleCollectionRendererFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionrendererfloatinput)

**FogLightingMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L48)

```csharp
ref ParticleLightFogLightingMode_t FogLightingMode { get; }
```

#### Property Value

- [ParticleLightFogLightingMode_t](/docs/api/shared/schemadefinitions/particlelightfoglightingmode_t)

**IgnoreDT** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L66)

```csharp
ref bool IgnoreDT { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Intensity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L22)

```csharp
CParticleCollectionFloatInput Intensity { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**LengthFadeInTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L72)

```csharp
ref float LengthFadeInTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LengthScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L70)

```csharp
ref float LengthScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**LightCookie** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L44)

```csharp
string LightCookie { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**LightType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L16)

```csharp
ref ParticleLightTypeChoiceList_t LightType { get; }
```

#### Property Value

- [ParticleLightTypeChoiceList_t](/docs/api/shared/schemadefinitions/particlelighttypechoicelist_t)

**MaxLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L62)

```csharp
ref float MaxLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**MinLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L64)

```csharp
ref float MinLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Phi** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L28)

```csharp
CParticleCollectionFloatInput Phi { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**PrevPntSource** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L60)

```csharp
ParticleAttributeIndex_t PrevPntSource { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

**Priority** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L46)

```csharp
ref int Priority { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**RadiusMultiplier** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L30)

```csharp
CParticleCollectionFloatInput RadiusMultiplier { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**RenderDiffuse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L40)

```csharp
ref bool RenderDiffuse { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**RenderSpecular** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L42)

```csharp
ref bool RenderSpecular { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**ReverseOrder** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L56)

```csharp
ref bool ReverseOrder { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Theta** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L26)

```csharp
CParticleCollectionFloatInput Theta { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**ZeroPercentFalloff** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderStandardLight.cs#L38)

```csharp
CParticleCollectionFloatInput ZeroPercentFalloff { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

