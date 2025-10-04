---
title: C_OP_RenderMaterialProxy
---

```csharp
public interface C_OP_RenderMaterialProxy : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderMaterialProxy>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Alpha** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L29)

```csharp
CPerParticleFloatInput Alpha { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

**ColorBlendType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L31)

```csharp
ref ParticleColorBlendType_t ColorBlendType { get; }
```

#### Property Value

- [ParticleColorBlendType_t](/docs/api/shared/schemadefinitions/particlecolorblendtype_t)

**ColorScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L27)

```csharp
CParticleCollectionVecInput ColorScale { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

**MaterialControlPoint** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L16)

```csharp
ref int MaterialControlPoint { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**MaterialOverrideEnabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L25)

```csharp
CParticleCollectionFloatInput MaterialOverrideEnabled { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

**MaterialVars** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L21)

```csharp
ref CUtlVector MaterialVars { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector)

**OverrideMaterial** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L23)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> OverrideMaterial { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

**ProxyType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderMaterialProxy.cs#L18)

```csharp
ref MaterialProxyType_t ProxyType { get; }
```

#### Property Value

- [MaterialProxyType_t](/docs/api/shared/schemadefinitions/materialproxytype_t)

