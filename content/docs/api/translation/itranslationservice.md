---
title: ITranslationService
---

# Interface ITranslationService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Translations/ITranslationService.cs#L5)

**Namespace**: [SwiftlyS2.Shared.Translation](/docs/api/translation)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ITranslationService
```

## Methods

### GetPlayerLocalizer(IPlayer)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Translations/ITranslationService.cs#L13)

Gets the localizer for the specified player.

```csharp
ILocalizer GetPlayerLocalizer(IPlayer player)
```

#### Parameters

- **player**: [IPlayer](/docs/api/players/iplayer) - The player to get the localizer for.

#### Returns

- [ILocalizer](/docs/api/translation/ilocalizer) - The localizer for the specified player.

