---
title: IGameDataService
---

```csharp
public interface IGameDataService
```

## Methods

**ApplyPatch(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L60)

```csharp
void ApplyPatch(string patchName)
```

#### Parameters

- **patchName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Patch name defined in `patchs.jsonc` file.

**GetOffset(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L39)

```csharp
nint GetOffset(string offsetName)
```

#### Parameters

- **offsetName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Offset name defined in `offsets.jsonc` file.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The offset.

**GetSignature(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L17)

```csharp
nint GetSignature(string signatureName)
```

#### Parameters

- **signatureName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Signature name defined in `signatures.jsonc` file.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The signature.

**HasOffset(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L32)

```csharp
bool HasOffset(string offsetName)
```

#### Parameters

- **offsetName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Offset name defined in `offsets.jsonc` file.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the offset exists.

**HasPatch(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L54)

```csharp
bool HasPatch(string patchName)
```

#### Parameters

- **patchName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Patch name defined in `patchs.jsonc` file.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the patch exists.

**HasSignature(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L10)

```csharp
bool HasSignature(string signatureName)
```

#### Parameters

- **signatureName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Signature name defined in `signatures.jsonc` file.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the signature exists.

**TryGetOffset(string, out nint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L47)

```csharp
bool TryGetOffset(string offsetName, out nint offset)
```

#### Parameters

- **offsetName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Offset name defined in `offsets.jsonc` file.
- **offset**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The offset.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the offset exists.

**TryGetSignature(string, out nint)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L25)

```csharp
bool TryGetSignature(string signatureName, out nint signature)
```

#### Parameters

- **signatureName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Signature name defined in `signatures.jsonc` file.
- **signature**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The signature.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the signature exists.

