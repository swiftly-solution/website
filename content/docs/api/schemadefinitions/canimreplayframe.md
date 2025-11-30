---
title: CAnimReplayFrame
---

# Interface CAnimReplayFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimReplayFrame : ISchemaClass<CAnimReplayFrame>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimReplayFrame>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### InputDataBlocks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L18)

```csharp
ref CUtlVector<CUtlBinaryBlock> InputDataBlocks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CUtlBinaryBlock](/docs/api/natives/cutlbinaryblock)>

### InstanceData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L20)

```csharp
ref CUtlBinaryBlock InstanceData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/natives/cutlbinaryblock)

### LocalToWorldTransform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L24)

```csharp
ref CTransform LocalToWorldTransform { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

### StartingLocalToWorldTransform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L22)

```csharp
ref CTransform StartingLocalToWorldTransform { get; }
```

#### Property Value

- [CTransform](/docs/api/natives/ctransform)

### TimeStamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L26)

```csharp
ref float TimeStamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

