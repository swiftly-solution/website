---
title: IGameDataService
---

# Interface IGameDataService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Services](/docs/api/services)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IGameDataService
```

## Methods

### ApplyPatch(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L60)

Apply a patch by name.

```csharp
void ApplyPatch(string patchName)
```

#### Parameters

- **patchName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Patch name defined in `patchs.jsonc` file.

### GetOffset(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L39)

Get an offset by name.

```csharp
int GetOffset(string offsetName)
```

#### Parameters

- **offsetName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Offset name defined in `offsets.jsonc` file.

#### Returns

- [int](https://learn.microsoft.com/dotnet/api/system.int32) - The offset.

### GetSignature(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L17)

Get a signature by name.

```csharp
nint GetSignature(string signatureName)
```

#### Parameters

- **signatureName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Signature name defined in `signatures.jsonc` file.

#### Returns

- [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The signature.

### HasOffset(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L32)

Check if an offset exists.

```csharp
bool HasOffset(string offsetName)
```

#### Parameters

- **offsetName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Offset name defined in `offsets.jsonc` file.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the offset exists.

### HasPatch(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L54)

Check if a patch exists.

```csharp
bool HasPatch(string patchName)
```

#### Parameters

- **patchName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Patch name defined in `patchs.jsonc` file.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the patch exists.

### HasSignature(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L10)

Check if a signature exists.

```csharp
bool HasSignature(string signatureName)
```

#### Parameters

- **signatureName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Signature name defined in `signatures.jsonc` file.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the signature exists.

### TryGetOffset(string, out nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L47)

Try to get an offset by name.

```csharp
bool TryGetOffset(string offsetName, out nint offset)
```

#### Parameters

- **offsetName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Offset name defined in `offsets.jsonc` file.
- **offset**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The offset.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the offset exists.

### TryGetSignature(string, out nint)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/GameData/IGameDataService.cs#L25)

Try to get a signature by name.

```csharp
bool TryGetSignature(string signatureName, out nint signature)
```

#### Parameters

- **signatureName**: [string](https://learn.microsoft.com/dotnet/api/system.string) - Signature name defined in `signatures.jsonc` file.
- **signature**: [nint](https://learn.microsoft.com/dotnet/api/system.intptr) - The signature.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - Whether the signature exists.

