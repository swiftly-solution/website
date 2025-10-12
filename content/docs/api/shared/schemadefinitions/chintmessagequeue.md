---
title: CHintMessageQueue
---

```csharp
public interface CHintMessageQueue : ISchemaClass<CHintMessageQueue>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Messages** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessageQueue.cs#L18)

```csharp
ref CUtlVector<PointerTo<CHintMessage>> Messages { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[PointerTo](/docs/api/shared/natives/pointerto-1)<[CHintMessage](/docs/api/shared/schemadefinitions/chintmessage)>>

### **PlayerController** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessageQueue.cs#L20)

```csharp
CBasePlayerController? PlayerController { get; }
```

- Property Value

- [CBasePlayerController](/docs/api/shared/schemadefinitions/cbaseplayercontroller)?

### **TmMessageEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CHintMessageQueue.cs#L16)

```csharp
ref float TmMessageEnd { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

