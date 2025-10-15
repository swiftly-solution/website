---
title: C_OP_RenderSimpleModelCollection
---

```csharp
public interface C_OP_RenderSimpleModelCollection : CParticleFunctionRenderer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionRenderer>, ISchemaClass<C_OP_RenderSimpleModelCollection>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AcceptsDecals

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSimpleModelCollection.cs#L29)

```csharp
ref bool AcceptsDecals { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AngularVelocityField

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSimpleModelCollection.cs#L33)

```csharp
ParticleAttributeIndex_t AngularVelocityField { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### CenterOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSimpleModelCollection.cs#L17)

```csharp
ref bool CenterOffset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisableMotionBlur

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSimpleModelCollection.cs#L27)

```csharp
ref bool DisableMotionBlur { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisableShadows

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSimpleModelCollection.cs#L25)

```csharp
ref bool DisableShadows { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DrawFilter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSimpleModelCollection.cs#L31)

```csharp
CPerParticleFloatInput DrawFilter { get; }
```

#### Property Value

- [CPerParticleFloatInput](/docs/api/shared/schemadefinitions/cperparticlefloatinput)

### Model

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSimpleModelCollection.cs#L19)

```csharp
ref CStrongHandle<InfoForResourceTypeCModel> Model { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCModel](/docs/api/shared/schemadefinitions/infoforresourcetypecmodel)>

### ModelInput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSimpleModelCollection.cs#L21)

```csharp
CParticleModelInput ModelInput { get; }
```

#### Property Value

- [CParticleModelInput](/docs/api/shared/schemadefinitions/cparticlemodelinput)

### SizeCullScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_RenderSimpleModelCollection.cs#L23)

```csharp
CParticleCollectionFloatInput SizeCullScale { get; }
```

#### Property Value

- [CParticleCollectionFloatInput](/docs/api/shared/schemadefinitions/cparticlecollectionfloatinput)

