---
title: CGameRules
---

```csharp
public interface CGameRules : ISchemaClass<CGameRules>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**GamePaused** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameRules.cs#L26)

```csharp
ref bool GamePaused { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**PauseStartTick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameRules.cs#L24)

```csharp
ref int PauseStartTick { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**QuestName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameRules.cs#L18)

```csharp
string QuestName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**QuestPhase** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameRules.cs#L20)

```csharp
ref int QuestPhase { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**TotalPausedTicks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameRules.cs#L22)

```csharp
ref int TotalPausedTicks { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**__m_pChainEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameRules.cs#L16)

```csharp
ref CNetworkVarChainer __m_pChainEntity { get; }
```

#### Property Value

- [CNetworkVarChainer](/docs/api/shared/natives/cnetworkvarchainer)

## Methods

**GamePausedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameRules.cs#L30)

```csharp
void GamePausedUpdated()
```

**PauseStartTickUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameRules.cs#L29)

```csharp
void PauseStartTickUpdated()
```

**TotalPausedTicksUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGameRules.cs#L28)

```csharp
void TotalPausedTicksUpdated()
```

