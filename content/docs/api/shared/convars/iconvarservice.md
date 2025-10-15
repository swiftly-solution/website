---
title: IConVarService
---

```csharp
public interface IConVarService
```

## Methods

### Create(string, string, T, ConvarFlags)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVarService.cs#L23)

```csharp
IConVar<T> Create<T>(string name, string helpMessage, T defaultValue, ConvarFlags flags = ConvarFlags.NONE)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the convar.
- **helpMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The help message of the convar.
- **defaultValue**: T - The default value of the convar.
- **flags**: [ConvarFlags](/docs/api/shared/convars/convarflags) - The flags of the convar.

#### Returns

- [IConVar](/docs/api/shared/convars/iconvar-1)<T> - The created convar.

#### Type Parameters

- **T**:  - The type of the convar.

### Create(string, string, T, T?, T?, ConvarFlags)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVarService.cs#L36)

```csharp
IConVar<T> Create<T>(string name, string helpMessage, T defaultValue, T? minValue = null, T? maxValue = null, ConvarFlags flags = ConvarFlags.NONE) where T : unmanaged
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the convar.
- **helpMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The help message of the convar.
- **defaultValue**: T - The default value of the convar.
- **minValue**: T? - The min value of the convar.
- **maxValue**: T? - The max value of the convar.
- **flags**: [ConvarFlags](/docs/api/shared/convars/convarflags) - The flags of the convar.

#### Returns

- [IConVar](/docs/api/shared/convars/iconvar-1)<T> - The created convar.

#### Type Parameters

- **T**:  - The type of the convar.

### Find(string)

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVarService.cs#L11)

```csharp
IConVar<T>? Find<T>(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the convar.

#### Returns

- [IConVar](/docs/api/shared/convars/iconvar-1)<T>? - The convar if found, null otherwise.

#### Type Parameters

- **T**:  - The type of the convar.

