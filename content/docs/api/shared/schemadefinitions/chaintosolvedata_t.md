---
title: ChainToSolveData_t
---

```csharp
public interface ChainToSolveData_t : ISchemaClass<ChainToSolveData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChainIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L18)

```csharp
ref int ChainIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DebugNormalizedValue

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L26)

```csharp
ref float DebugNormalizedValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DebugOffset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L28)

```csharp
ref Vector DebugOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### DebugSetting

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L24)

```csharp
ref SolveIKChainAnimNodeDebugSetting DebugSetting { get; }
```

#### Property Value

- [SolveIKChainAnimNodeDebugSetting](/docs/api/shared/schemadefinitions/solveikchainanimnodedebugsetting)

### SolverSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L20)

```csharp
IKSolverSettings_t SolverSettings { get; }
```

#### Property Value

- [IKSolverSettings_t](/docs/api/shared/schemadefinitions/iksolversettings_t)

### TargetSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L22)

```csharp
IKTargetSettings_t TargetSettings { get; }
```

#### Property Value

- [IKTargetSettings_t](/docs/api/shared/schemadefinitions/iktargetsettings_t)

