---
title: CSingleFrameUpdateNode
---

# Interface CSingleFrameUpdateNode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSingleFrameUpdateNode.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSingleFrameUpdateNode : CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CSingleFrameUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CLeafUpdateNode](/docs/api/schemadefinitions/cleafupdatenode)
- [CAnimUpdateNodeBase](/docs/api/schemadefinitions/canimupdatenodebase)
- [ISchemaClass<CAnimUpdateNodeBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CLeafUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CSingleFrameUpdateNode>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Actions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSingleFrameUpdateNode.cs#L18)

```csharp
ref CUtlVector<SchemaUntypedField> Actions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[SchemaUntypedField](/docs/api/schemas/schemauntypedfield)>

### Cycle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSingleFrameUpdateNode.cs#L24)

```csharp
ref float Cycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PoseCacheHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSingleFrameUpdateNode.cs#L20)

```csharp
CPoseHandle PoseCacheHandle { get; }
```

#### Property Value

- [CPoseHandle](/docs/api/schemadefinitions/cposehandle)

### Sequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSingleFrameUpdateNode.cs#L22)

```csharp
HSequence Sequence { get; }
```

#### Property Value

- [HSequence](/docs/api/schemadefinitions/hsequence)

