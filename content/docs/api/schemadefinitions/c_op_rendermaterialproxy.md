---
title: C_OP_RenderMaterialProxy
---

# Interface C_OP_RenderMaterialProxy

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C_OP_RenderMaterialProxy : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderMaterialProxy>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CParticleFunctionRenderer](/docs/api/schemadefinitions/cparticlefunctionrenderer)
- [CParticleFunction](/docs/api/schemadefinitions/cparticlefunction)
- [ISchemaClass<CParticleFunction>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CParticleFunctionRenderer>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<C_OP_RenderMaterialProxy>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Alpha

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L30)

```csharp
CPerParticleFloatInput Alpha { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/schemadefinitions/cperparticlefloatinput)

### ColorBlendType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L32)

```csharp
ref ParticleColorBlendType_t ColorBlendType { get; }
```

#### Property Value

- [ParticleColorBlendType_t](/docs/api/schemadefinitions/particlecolorblendtype_t)

### ColorScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L28)

```csharp
CParticleCollectionVecInput ColorScale { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/schemadefinitions/cparticlecollectionvecinput)

### MaterialControlPoint

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L18)

```csharp
ref int MaterialControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaterialOverrideEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L26)

```csharp
CParticleCollectionFloatInput MaterialOverrideEnabled { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/schemadefinitions/cparticlecollectionfloatinput)

### MaterialVars

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L22)

```csharp
ref CUtlVector<MaterialVariable_t> MaterialVars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[MaterialVariable_t](/docs/api/schemadefinitions/materialvariable_t)>

### OverrideMaterial

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L24)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> OverrideMaterial { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeIMaterial2](/docs/api/schemadefinitions/infoforresourcetypeimaterial2)>

### ProxyType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L20)

```csharp
ref MaterialProxyType_t ProxyType { get; }
```

#### Property Value

- [MaterialProxyType_t](/docs/api/schemadefinitions/materialproxytype_t)

