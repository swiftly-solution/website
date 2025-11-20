---
title: IGameService
---

```csharp
public interface IGameService
```

## Properties

### MatchData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L11)

```csharp
ref readonly CCSMatch MatchData { get; }
```

#### Property Value

- [CCSMatch](/docs/api/shared/natives/ccsmatch)

## Methods

### AddCTBonusPoints(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L52)

```csharp
void AddCTBonusPoints(int points)
```

#### Parameters

- **points**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Bonus points to add.

### AddCTScore(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L64)

```csharp
void AddCTScore(int score)
```

#### Parameters

- **score**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Score to add.

### AddCTWins(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L34)

```csharp
void AddCTWins(int numWins)
```

#### Parameters

- **numWins**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of wins to add.

### AddTerroristBonusPoints(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L46)

```csharp
void AddTerroristBonusPoints(int points)
```

#### Parameters

- **points**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Bonus points to add.

### AddTerroristScore(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L58)

```csharp
void AddTerroristScore(int score)
```

#### Parameters

- **score**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Score to add.

### AddTerroristWins(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L28)

```csharp
void AddTerroristWins(int numWins)
```

#### Parameters

- **numWins**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of wins to add.

### GetWinningTeam()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L86)

```csharp
int GetWinningTeam()
```

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - Team ID of the winner, or 0 if tie.

### GoToOvertime(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L70)

```csharp
void GoToOvertime(int numOvertimesToAdd = 1)
```

#### Parameters

- **numOvertimesToAdd**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of overtime periods to add.

### IncrementRound(int)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L40)

```csharp
void IncrementRound(int numRounds = 1)
```

#### Parameters

- **numRounds**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - Number of rounds to increment.

### Reset()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L16)

```csharp
void Reset()
```

### SetPhase(GamePhase)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L22)

```csharp
void SetPhase(GamePhase phase)
```

#### Parameters

- **phase**: [GamePhase](/docs/api/shared/misc/gamephase) - The game phase to set.

### SwapTeamScores()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Game/IGameService.cs#L75)

```csharp
void SwapTeamScores()
```

