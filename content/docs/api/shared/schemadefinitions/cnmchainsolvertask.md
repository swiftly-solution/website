---
title: CNmChainSolverTask
---

```csharp
public interface CNmChainSolverTask : CNmPoseTask, ISchemaClass<CNmPoseTask>, ISchemaClass<CNmChainSolverTask>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlendMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L27)

```csharp
ref NmIKBlendMode_t BlendMode { get; }
```

#### Property Value

- [NmIKBlendMode_t](/docs/api/shared/schemadefinitions/nmikblendmode_t)

### BlendWeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L29)

```csharp
ref float BlendWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ChainStartTransformMS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L37)

```csharp
ref CTransform ChainStartTransformMS { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

### DebugEffectorBoneID

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L35)

```csharp
ref CGlobalSymbol DebugEffectorBoneID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### DebugRequestedTargetTransformMS

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L39)

```csharp
ref CTransform DebugRequestedTargetTransformMS { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

### DebugTotalChainLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L41)

```csharp
ref float DebugTotalChainLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EffectorBoneIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L17)

```csharp
ref int EffectorBoneIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EffectorTarget

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L25)

```csharp
CNmTarget EffectorTarget { get; }
```

#### Property Value

- [CNmTarget](/docs/api/shared/schemadefinitions/cnmtarget)

### EffectorTargetBoneIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L19)

```csharp
ref int EffectorTargetBoneIdx { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### IsRunningFromDeserializedData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L33)

```csharp
ref bool IsRunningFromDeserializedData { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsTargetInWorldSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L31)

```csharp
ref bool IsTargetInWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NumBonesInChain

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L23)

```csharp
ref int NumBonesInChain { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TargetTransform

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmChainSolverTask.cs#L21)

```csharp
ref CTransform TargetTransform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

