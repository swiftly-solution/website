---
title: RotatorQueueEntry_t
---

# Interface RotatorQueueEntry_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RotatorQueueEntry_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface RotatorQueueEntry_t : ISchemaClass<RotatorQueueEntry_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<RotatorQueueEntry_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Space

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RotatorQueueEntry_t.cs#L20)

```csharp
ref RotatorTargetSpace_t Space { get; }
```

#### Property Value

- [RotatorTargetSpace_t](/docs/api/schemadefinitions/rotatortargetspace_t)

### Target

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/RotatorQueueEntry_t.cs#L18)

```csharp
ref Quaternion Target { get; }
```

#### Property Value

- [Quaternion](/docs/api/natives/quaternion)

