---
title: C_INIT_PointList
---

```csharp
public interface C_INIT_PointList : CParticleFunctionInitializer, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionInitializer>, ISchemaClass<C_INIT_PointList>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ClosedLoop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PointList.cs#L24)

```csharp
ref bool ClosedLoop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FieldOutput

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PointList.cs#L18)

```csharp
ParticleAttributeIndex_t FieldOutput { get; }
```

#### Property Value

- [ParticleAttributeIndex_t](/docs/api/shared/schemadefinitions/particleattributeindex_t)

### NumPointsAlongPath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PointList.cs#L26)

```csharp
ref int NumPointsAlongPath { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### PlaceAlongPath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PointList.cs#L22)

```csharp
ref bool PlaceAlongPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PointList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_INIT_PointList.cs#L20)

```csharp
ref CUtlVector<PointDefinition_t> PointList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointDefinition_t](/docs/api/shared/schemadefinitions/pointdefinition_t)>

