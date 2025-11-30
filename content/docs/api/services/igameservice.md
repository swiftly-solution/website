---
title: IGameService
---

# Interface IGameService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Services](/docs/api/services)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IGameService
```

## Properties

### MatchData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L11)

Gets a read-only reference to the current match data.

```csharp
ref readonly CCSMatch MatchData { get; }
```

#### Property Value

- [CCSMatch](/docs/api/natives/ccsmatch)

## Methods

### AddCTBonusPoints(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L52)

Adds bonus points to the Counter-Terrorist team.

```csharp
void AddCTBonusPoints(int points)
```

#### Parameters

- **points**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Bonus points to add.

### AddCTScore(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L64)

Adds score to the Counter-Terrorist team.

```csharp
void AddCTScore(int score)
```

#### Parameters

- **score**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Score to add.

### AddCTWins(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L34)

Adds wins to the Counter-Terrorist team.

```csharp
void AddCTWins(int numWins)
```

#### Parameters

- **numWins**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of wins to add.

### AddTerroristBonusPoints(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L46)

Adds bonus points to the Terrorist team.

```csharp
void AddTerroristBonusPoints(int points)
```

#### Parameters

- **points**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Bonus points to add.

### AddTerroristScore(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L58)

Adds score to the Terrorist team.

```csharp
void AddTerroristScore(int score)
```

#### Parameters

- **score**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Score to add.

### AddTerroristWins(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L28)

Adds wins to the Terrorist team.

```csharp
void AddTerroristWins(int numWins)
```

#### Parameters

- **numWins**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of wins to add.

### GetWinningTeam()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L86)

Gets the winning team ID.

```csharp
int GetWinningTeam()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Team ID of the winner, or 0 if tie.

### GoToOvertime(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L70)

Enters overtime mode.

```csharp
void GoToOvertime(int numOvertimesToAdd = 1)
```

#### Parameters

- **numOvertimesToAdd**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of overtime periods to add.

### IncrementRound(int)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L40)

Increments the round count.

```csharp
void IncrementRound(int numRounds = 1)
```

#### Parameters

- **numRounds**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of rounds to increment.

### Reset()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L16)

Resets all match data to initial state.

```csharp
void Reset()
```

### SetPhase(GamePhase)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L22)

Sets the current game phase.

```csharp
void SetPhase(GamePhase phase)
```

#### Parameters

- **phase**: [GamePhase](/docs/api/misc/gamephase) - The game phase to set.

### SwapTeamScores()

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L75)

Swaps the team scores between Terrorist and Counter-Terrorist.

```csharp
void SwapTeamScores()
```

