---
title: CBoneMaskUpdateNode
---

```csharp
public interface CBoneMaskUpdateNode : CBinaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CBinaryUpdateNode>, ISchemaClass<CBoneMaskUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlendParameter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L29)

```csharp
CAnimParamHandle BlendParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### BlendSpace

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L21)

```csharp
ref BoneMaskBlendSpace BlendSpace { get; }
```

#### Property Value

- [BoneMaskBlendSpace](/docs/api/shared/schemadefinitions/bonemaskblendspace)

### BlendValueSource

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L27)

```csharp
ref AnimValueSource BlendValueSource { get; }
```

#### Property Value

- [AnimValueSource](/docs/api/shared/schemadefinitions/animvaluesource)

### FootMotionTiming

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L23)

```csharp
ref BinaryNodeChildOption FootMotionTiming { get; }
```

#### Property Value

- [BinaryNodeChildOption](/docs/api/shared/schemadefinitions/binarynodechildoption)

### RootMotionBlend

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L19)

```csharp
ref float RootMotionBlend { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UseBlendScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L25)

```csharp
ref bool UseBlendScale { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WeightListIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBoneMaskUpdateNode.cs#L17)

```csharp
ref int WeightListIndex { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

