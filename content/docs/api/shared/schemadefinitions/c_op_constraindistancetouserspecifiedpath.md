---
title: C_OP_ConstrainDistanceToUserSpecifiedPath
---

```csharp
public interface C_OP_ConstrainDistanceToUserSpecifiedPath : CParticleFunctionConstraint, CParticleFunction, ISchemaClass<CParticleFunction>, ISchemaClass<CParticleFunctionConstraint>, ISchemaClass<C_OP_ConstrainDistanceToUserSpecifiedPath>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### LoopedPath

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L23)

```csharp
ref bool LoopedPath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L19)

```csharp
ref float MaxDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinDistance

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L17)

```csharp
ref float MinDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PointList

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L25)

```csharp
ref CUtlVector<PointDefinitionWithTimeValues_t> PointList { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[PointDefinitionWithTimeValues_t](/docs/api/shared/schemadefinitions/pointdefinitionwithtimevalues_t)>

### TimeScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/C_OP_ConstrainDistanceToUserSpecifiedPath.cs#L21)

```csharp
ref float TimeScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

