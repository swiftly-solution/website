---
title: CNmChainSolverTask
---

# Interface CNmChainSolverTask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmChainSolverTask : CNmPoseTask, ISchemaClass<CNmPoseTask>, ISchemaClass<CNmChainSolverTask>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmPoseTask](/docs/api/schemadefinitions/cnmposetask)
- [ISchemaClass<CNmPoseTask>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmChainSolverTask>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlendMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L28)

```csharp
ref NmIKBlendMode_t BlendMode { get; }
```

#### Property Value

- [NmIKBlendMode_t](/docs/api/schemadefinitions/nmikblendmode_t)

### BlendWeight

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L30)

```csharp
ref float BlendWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ChainStartTransformMS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L38)

```csharp
ref CTransform ChainStartTransformMS { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

### DebugEffectorBoneID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L36)

```csharp
ref CGlobalSymbol DebugEffectorBoneID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### DebugRequestedTargetTransformMS

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L40)

```csharp
ref CTransform DebugRequestedTargetTransformMS { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

### DebugTotalChainLength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L42)

```csharp
ref float DebugTotalChainLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EffectorBoneIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L18)

```csharp
ref int EffectorBoneIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EffectorTarget

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L26)

```csharp
CNmTarget EffectorTarget { get; }
```

#### Property Value

- [CNmTarget](/docs/api/schemadefinitions/cnmtarget)

### EffectorTargetBoneIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L20)

```csharp
ref int EffectorTargetBoneIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsRunningFromDeserializedData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L34)

```csharp
ref bool IsRunningFromDeserializedData { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsTargetInWorldSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L32)

```csharp
ref bool IsTargetInWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumBonesInChain

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L24)

```csharp
ref int NumBonesInChain { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetTransform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L22)

```csharp
ref CTransform TargetTransform { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

