---
title: EventPlayerHintmessage
---

# Interface EventPlayerHintmessage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerHintmessage.cs#L11)

**Namespace**: [SwiftlyS2.Shared.GameEventDefinitions](/docs/api/gameeventdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

Event "player_hintmessage"

```csharp
public interface EventPlayerHintmessage : IGameEvent<EventPlayerHintmessage>
```

#### Implements

- [IGameEvent<EventPlayerHintmessage>](/docs/api/gameevents/igameeventt)

## Properties

### HintMessage

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/GameEvents/Interfaces/EventPlayerHintmessage.cs#L23)

localizable string of a hint
<br />
type: string

```csharp
string HintMessage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

