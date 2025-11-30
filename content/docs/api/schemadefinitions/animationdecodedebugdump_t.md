---
title: AnimationDecodeDebugDump_t
---

# Interface AnimationDecodeDebugDump_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationDecodeDebugDump_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface AnimationDecodeDebugDump_t : ISchemaClass<AnimationDecodeDebugDump_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<AnimationDecodeDebugDump_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Elems

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationDecodeDebugDump_t.cs#L20)

```csharp
ref CUtlVector<AnimationDecodeDebugDumpElement_t> Elems { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[AnimationDecodeDebugDumpElement_t](/docs/api/schemadefinitions/animationdecodedebugdumpelement_t)>

### ProcessingType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/AnimationDecodeDebugDump_t.cs#L18)

```csharp
ref AnimationProcessingType_t ProcessingType { get; }
```

#### Property Value

- [AnimationProcessingType_t](/docs/api/schemadefinitions/animationprocessingtype_t)

