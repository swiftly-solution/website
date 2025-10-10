---
title: InterfaceManager
---

```csharp
public class InterfaceManager : IInterfaceManager, IDisposable
```

#### Inheritance

#### Implements

#### Inherited Members

## Methods

**AddSharedInterface<TInterface, TImpl>(string, TImpl)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Plugins/InterfaceManager.cs#L11)

```csharp
public void AddSharedInterface<TInterface, TImpl>(string key, TImpl implInstance) where TInterface : class where TImpl : class, TInterface
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the interface.
- **implInstance**: TImpl - The implementation of the interface.

#### Type Parameters

- **TInterface**:  - The interface to add.
- **TImpl**:  - The implementation of the interface.

**Build()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Plugins/InterfaceManager.cs#L37)

```csharp
public void Build()
```

**Dispose()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Plugins/InterfaceManager.cs#L42)

```csharp
public void Dispose()
```

**GetSharedInterface<TInterface>(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Plugins/InterfaceManager.cs#L28)

```csharp
public TInterface GetSharedInterface<TInterface>(string key) where TInterface : class
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the interface.

#### Returns

- TInterface - The implementation of the interface.

#### Type Parameters

- **TInterface**:  - The interface to get.

**HasSharedInterface(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Core/Modules/Plugins/InterfaceManager.cs#L23)

```csharp
public bool HasSharedInterface(string key)
```

#### Parameters

- **key**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The key of the interface.

#### Returns

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean) - True if the interface exists, false otherwise.

