---
title: ILocalizer
---

# Interface ILocalizer

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Translations/ILocalizer.cs#L6)

**Namespace**: [SwiftlyS2.Shared.Translation](/docs/api/translation)

**Assembly**: SwiftlyS2.CS2.dll

Represents a localizer that can be used to get translations for a given key.

```csharp
public interface ILocalizer
```

## Properties

### this

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Translations/ILocalizer.cs#L14)

Gets the translation for the specified key.

```csharp
string this[string key] { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### this]

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Translations/ILocalizer.cs#L22)

Gets the translation for the specified key with the specified arguments.

```csharp
string this[string key, params object[] args] { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

