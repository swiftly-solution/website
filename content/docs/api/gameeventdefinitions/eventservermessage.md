---
title: EventServerMessage
---

# Interface EventServerMessage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventServerMessage.cs#L12)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "server_message"
a generic server message

```csharp
public interface EventServerMessage : IGameEvent<EventServerMessage>
```

#### Implements

- [IGameEvent<EventServerMessage>](/docs/api/gameevents/igameeventt)

## Properties

### Text

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventServerMessage.cs#L24)

the message text
<br />
type: string

```csharp
string Text { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

