---
title: CBlendUpdateNode
---

```csharp
public interface CBlendUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CBlendUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlendKeyType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L31)

```csharp
ref BlendKeyType BlendKeyType { get; }
```

#### Property Value

- [BlendKeyType](/docs/api/shared/schemadefinitions/blendkeytype)

### BlendValueSource

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L23)

```csharp
ref AnimValueSource BlendValueSource { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/shared/schemadefinitions/animvaluesource)

### Children

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L17)

```csharp
ref CUtlVector<CAnimUpdateNodeRef> Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CAnimUpdateNodeRef](/docs/api/shared/schemadefinitions/canimupdatenoderef)>

### Damping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L29)

```csharp
CAnimInputDamping Damping { get; }
```

#### Property Value

- [CAnimInputDamping](/docs/api/shared/schemadefinitions/caniminputdamping)

### IsAngle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L41)

```csharp
ref bool IsAngle { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinearRootMotionBlendMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L25)

```csharp
ref LinearRootMotionBlendMode_t LinearRootMotionBlendMode { get; }
```

#### Property Value

- [LinearRootMotionBlendMode_t](/docs/api/shared/schemadefinitions/linearrootmotionblendmode_t)

### LockBlendOnReset

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L33)

```csharp
ref bool LockBlendOnReset { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LockWhenWaning

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L39)

```csharp
ref bool LockWhenWaning { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Loop

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L37)

```csharp
ref bool Loop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ParamIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L27)

```csharp
CAnimParamHandle ParamIndex { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### SortedOrder

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L19)

```csharp
ref CUtlVector<byte> SortedOrder { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)>

### SyncCycles

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L35)

```csharp
ref bool SyncCycles { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TargetValues

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBlendUpdateNode.cs#L21)

```csharp
ref CUtlVector<float> TargetValues { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

