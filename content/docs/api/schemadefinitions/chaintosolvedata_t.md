---
title: ChainToSolveData_t
---

# Interface ChainToSolveData_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ChainToSolveData_t : ISchemaClass<ChainToSolveData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<ChainToSolveData_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ChainIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L18)

```csharp
ref int ChainIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DebugNormalizedValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L26)

```csharp
ref float DebugNormalizedValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DebugOffset

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L28)

```csharp
ref Vector DebugOffset { get; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### DebugSetting

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L24)

```csharp
ref SolveIKChainAnimNodeDebugSetting DebugSetting { get; }
```

#### Property Value

- [SolveIKChainAnimNodeDebugSetting](/docs/api/schemadefinitions/solveikchainanimnodedebugsetting)

### SolverSettings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L20)

```csharp
IKSolverSettings_t SolverSettings { get; }
```

#### Property Value

- [IKSolverSettings_t](/docs/api/schemadefinitions/iksolversettings_t)

### TargetSettings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ChainToSolveData_t.cs#L22)

```csharp
IKTargetSettings_t TargetSettings { get; }
```

#### Property Value

- [IKTargetSettings_t](/docs/api/schemadefinitions/iktargetsettings_t)

