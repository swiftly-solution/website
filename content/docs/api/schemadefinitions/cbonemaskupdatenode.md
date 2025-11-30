---
title: CBoneMaskUpdateNode
---

# Interface CBoneMaskUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CBoneMaskUpdateNode : CBinaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CBinaryUpdateNode>, ISchemaClass<CBoneMaskUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBinaryUpdateNode](/docs/api/schemadefinitions/cbinaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBinaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBoneMaskUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BlendParameter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L30)

```csharp
CAnimParamHandle BlendParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/schemadefinitions/canimparamhandle)

### BlendSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L22)

```csharp
ref BoneMaskBlendSpace BlendSpace { get; }
```

#### Property Value

- [BoneMaskBlendSpace](/docs/api/schemadefinitions/bonemaskblendspace)

### BlendValueSource

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L28)

```csharp
ref AnimValueSource BlendValueSource { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/schemadefinitions/animvaluesource)

### FootMotionTiming

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L24)

```csharp
ref BinaryNodeChildOption FootMotionTiming { get; }
```

#### Property Value

- [BinaryNodeChildOption](/docs/api/schemadefinitions/binarynodechildoption)

### RootMotionBlend

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L20)

```csharp
ref float RootMotionBlend { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UseBlendScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L26)

```csharp
ref bool UseBlendScale { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WeightListIndex

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L18)

```csharp
ref int WeightListIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

