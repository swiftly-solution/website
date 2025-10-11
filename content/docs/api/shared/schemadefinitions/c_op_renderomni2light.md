---
title: C_OP_RenderOmni2Light
---

```csharp
public interface C_OP_RenderOmni2Light : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderOmni2Light>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **BrightnessCandelas** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L26)

```csharp
CPerParticleFloatInput BrightnessCandelas { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **BrightnessLumens** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L24)

```csharp
CPerParticleFloatInput BrightnessLumens { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **BrightnessUnit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L22)

```csharp
ref ParticleLightUnitChoiceList_t BrightnessUnit { get; }
```

#### Property Value

- [ParticleLightUnitChoiceList_t](/docs/api/shared/schemadefinitions/particlelightunitchoicelist_t)

### **CastShadows** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L28)

```csharp
ref bool CastShadows { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ColorBlend** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L18)

```csharp
CParticleCollectionVecInput ColorBlend { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### **ColorBlendType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L20)

```csharp
ref ParticleColorBlendType_t ColorBlendType { get; }
```

#### Property Value

- [ParticleColorBlendType_t](/docs/api/shared/schemadefinitions/particlecolorblendtype_t)

### **Fog** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L30)

```csharp
ref bool Fog { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FogScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L32)

```csharp
CPerParticleFloatInput FogScale { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **InnerConeAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L40)

```csharp
CPerParticleFloatInput InnerConeAngle { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **LightCookie** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L44)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> LightCookie { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### **LightType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L16)

```csharp
ref ParticleOmni2LightTypeChoiceList_t LightType { get; }
```

#### Property Value

- [ParticleOmni2LightTypeChoiceList_t](/docs/api/shared/schemadefinitions/particleomni2lighttypechoicelist_t)

### **LuminaireRadius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L34)

```csharp
CPerParticleFloatInput LuminaireRadius { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **OuterConeAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L42)

```csharp
CPerParticleFloatInput OuterConeAngle { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **Range** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L38)

```csharp
CPerParticleFloatInput Range { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **Skirt** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L36)

```csharp
CPerParticleFloatInput Skirt { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### **SphericalCookie** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderOmni2Light.cs#L46)

```csharp
ref bool SphericalCookie { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

