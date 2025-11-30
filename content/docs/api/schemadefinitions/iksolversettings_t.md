---
title: IKSolverSettings_t
---

# Interface IKSolverSettings_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKSolverSettings_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IKSolverSettings_t : ISchemaClass<IKSolverSettings_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<IKSolverSettings_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EndEffectorRotationFixUpMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKSolverSettings_t.cs#L22)

```csharp
ref EIKEndEffectorRotationFixUpMode EndEffectorRotationFixUpMode { get; }
```

#### Property Value

- [EIKEndEffectorRotationFixUpMode](/docs/api/schemadefinitions/eikendeffectorrotationfixupmode)

### NumIterations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKSolverSettings_t.cs#L20)

```csharp
ref int NumIterations { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SolverType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/IKSolverSettings_t.cs#L18)

```csharp
ref IKSolverType SolverType { get; }
```

#### Property Value

- [IKSolverType](/docs/api/schemadefinitions/iksolvertype)

