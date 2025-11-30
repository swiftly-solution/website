---
title: CSubtractUpdateNode
---

# Interface CSubtractUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSubtractUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSubtractUpdateNode : CBinaryUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CBinaryUpdateNode>, ISchemaClass<CSubtractUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CBinaryUpdateNode](/docs/api/schemadefinitions/cbinaryupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CBinaryUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSubtractUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ApplyChannelsSeparately

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSubtractUpdateNode.cs#L22)

```csharp
ref bool ApplyChannelsSeparately { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ApplyToFootMotion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSubtractUpdateNode.cs#L20)

```csharp
ref bool ApplyToFootMotion { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FootMotionTiming

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSubtractUpdateNode.cs#L18)

```csharp
ref BinaryNodeChildOption FootMotionTiming { get; }
```

#### Property Value

- [BinaryNodeChildOption](/docs/api/schemadefinitions/binarynodechildoption)

### UseModelSpace

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSubtractUpdateNode.cs#L24)

```csharp
ref bool UseModelSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

