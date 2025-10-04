---
title: IKSolverSettings_t
---

```csharp
public interface IKSolverSettings_t : ISchemaClass<IKSolverSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**EndEffectorRotationFixUpMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKSolverSettings_t.cs#L20)

```csharp
ref EIKEndEffectorRotationFixUpMode EndEffectorRotationFixUpMode { get; }
```

#### Property Value

- [EIKEndEffectorRotationFixUpMode](/docs/api/shared/schemadefinitions/eikendeffectorrotationfixupmode)

**NumIterations** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKSolverSettings_t.cs#L18)

```csharp
ref int NumIterations { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**SolverType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKSolverSettings_t.cs#L16)

```csharp
ref IKSolverType SolverType { get; }
```

#### Property Value

- [IKSolverType](/docs/api/shared/schemadefinitions/iksolvertype)

