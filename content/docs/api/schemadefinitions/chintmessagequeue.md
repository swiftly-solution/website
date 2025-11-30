---
title: CHintMessageQueue
---

# Interface CHintMessageQueue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessageQueue.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CHintMessageQueue : ISchemaClass<CHintMessageQueue>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CHintMessageQueue>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Messages

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessageQueue.cs#L20)

```csharp
ref CUtlVector<PointerTo<CHintMessage>> Messages { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[PointerTo](/docs/api/natives/pointertot)<[CHintMessage](/docs/api/schemadefinitions/chintmessage)>>

### PlayerController

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessageQueue.cs#L22)

```csharp
CBasePlayerController? PlayerController { get; }
```

#### Property Value

- [CBasePlayerController](/docs/api/schemadefinitions/cbaseplayercontroller)?

### TmMessageEnd

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessageQueue.cs#L18)

```csharp
ref float TmMessageEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

