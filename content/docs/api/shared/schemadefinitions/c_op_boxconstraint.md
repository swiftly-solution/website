---
title: C_OP_BoxConstraint
---

```csharp
public interface C_OP_BoxConstraint : CParticleFunctionConstraint, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionConstraint>, ISchemaClass<C_OP_BoxConstraint>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AccountForRadius

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BoxConstraint.cs#L25)

```csharp
ref bool AccountForRadius { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CP

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BoxConstraint.cs#L21)

```csharp
ref int CP { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LocalSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BoxConstraint.cs#L23)

```csharp
ref bool LocalSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Max

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BoxConstraint.cs#L19)

```csharp
CParticleCollectionVecInput Max { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

### Min

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_BoxConstraint.cs#L17)

```csharp
CParticleCollectionVecInput Min { get; }
```

#### Property Value

- [CParticleCollectionVecInput](/docs/api/shared/schemadefinitions/cparticlecollectionvecinput)

