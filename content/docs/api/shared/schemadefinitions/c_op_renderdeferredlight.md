---
title: C_OP_RenderDeferredLight
---

```csharp
public interface C_OP_RenderDeferredLight : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderDeferredLight>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Alpha2Field** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L24)

```csharp
ParticleAttributeIndex_t Alpha2Field { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **AlphaScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L22)

```csharp
ref float AlphaScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AlphaTestPointField** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L38)

```csharp
ParticleAttributeIndex_t AlphaTestPointField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **AlphaTestRangeField** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L40)

```csharp
ParticleAttributeIndex_t AlphaTestRangeField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **AlphaTestSharpnessField** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L42)

```csharp
ParticleAttributeIndex_t AlphaTestSharpnessField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### **ColorBlendType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L28)

```csharp
ref ParticleColorBlendType_t ColorBlendType { get; }
```

#### Property Value

- [ParticleColorBlendType_t](/docs/api/shared/schemadefinitions/particlecolorblendtype_t)

### **ColorScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L26)

```csharp
CParticleCollectionVecInput ColorScale { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### **DistanceFalloff** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L34)

```csharp
ref float DistanceFalloff { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **HSVShiftControlPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L46)

```csharp
ref int HSVShiftControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **LightDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L30)

```csharp
ref float LightDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **RadiusScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L20)

```csharp
ref float RadiusScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **SpotFoV** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L36)

```csharp
ref float SpotFoV { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **StartFalloff** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L32)

```csharp
ref float StartFalloff { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Texture** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L44)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> Texture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### **UseAlphaTestWindow** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L16)

```csharp
ref bool UseAlphaTestWindow { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **UseTexture** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderDeferredLight.cs#L18)

```csharp
ref bool UseTexture { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

